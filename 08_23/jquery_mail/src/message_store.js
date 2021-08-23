const messages = {
  inbox: [
    {
      from: "donglife@gmail.com",
      subject: "hello not spam",
      message: "hi this is spam"
    },
    {
      from: "sajfld;a@gmail.com",
      subject: "yo weird username",
      message: "hi"
    }
  ],
  sent: [
    {
      to: "stephen2@gmail.com",
      subject: "webdev rules!",
      message: "yo what the duck"
    },
    {
      to: "warzonesucks@gmail.com",
      subject: "yowhatthef",
      message: "iwantsomeJenis"
    }
  ]
};

class Message {
  constructor(from = "", to = "", subject = "", message = "") {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.message = message;
  };
};

let messageDraft = new Message;

const MessageStore = {
  getInboxMessages: () => {
    return messages.inbox;
  },

  getSentMessages: () => {
    return messages.sent;
  },

  getMessageDraft: () => {
    return messageDraft;
  },

  updateDraftField: (field, value) => {
    messageDraft[field] = value;
  },

  sendDraft: () => {
    messages.sent.push(messageDraft)
    messageDraft = new Message;
  }
};

module.exports = MessageStore;