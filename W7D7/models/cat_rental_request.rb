class CatRentalRequest < ApplicationRecord
  validates :cat_id, :status, :start_date, :end_date, presence: true
  validates :status, inclusion: { in: ["APPROVED", "DENIED", "PENDING"],
    message: "is not a valid status"
  }
  validate :does_not_overlap_approved_request

  belongs_to(
    :cat,
    class_name: "Cat",
    foreign_key: :cat_id,
    primary_key: :id
  )

  def pending?
    self.status == "PENDING"
  end

  def denied?
    self.status == "DENIED"
  end

  def approve!
    raise 'not pending' unless self.status == "PENDING"
    transaction do 
      self.status = "APPROVED"
      self.save!

      overlapping_pending_requests.each do |req|
        req.update!(status: "DENIED")
      end
    end
  end

  def deny!
    self.status = "DENIED"
  end

  def overlapping_requests
    # get all the CatRentalRequest that overlap with the one we are trying to validate
    CatRentalRequest
      .where.not(id: self.id)
      .where(cat_id: cat_id)
      .where.not('start_date > :end_date OR end_date < :start_date', start_date: start_date, end_date: end_date)
  end

  def overlapping_approved_requests
    overlapping_requests.where('status = \'APPROVED\'')
  end

  def overlapping_pending_requests
    overlapping_requests.where('status = \'PENDING\'')
  end

  def does_not_overlap_approved_request
    return if self.denied?

    unless overlapping_approved_requests.empty?
      errors[:base] <<
        'Request conflicts with existing approved request'
    end
  end
end
