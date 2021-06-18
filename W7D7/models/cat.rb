COLORS = ["black", "brown", "albino", "brownish-red", "blackish-brown"]

class Cat < ApplicationRecord
  validates :birth_date, :color, :name, :sex, :description, presence: true

  validates :color, inclusion: { in: COLORS,
    message: "is not a valid color"
  }

  validates :sex, inclusion: { in: ["M", "F"],
    message: "is not a valid sex"
  }

  has_one(
    :cat_rental_request,
    class_name: 'CatRentalRequest',
    foreign_key: :cat_id,
    primary_key: :id,
    dependent: :destroy
  )

  def age
    # Take today's date, subtract from birth_date of cat, returns number of days.
    # Divide by 365 to get how old cat is in years.
    years = ((Date.today - self.birth_date)/365).to_i
  end
end
