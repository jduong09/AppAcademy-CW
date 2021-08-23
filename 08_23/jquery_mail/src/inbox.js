const MessageStore = require("./message_store.js");

const Inbox = {
  renderMessage: function (message) {
    const li = document.createElement("li");
    li.className = "message";
    li.innerHTML = `<span class="from">${message.from}</span>
                    <span class="subject">${message.subject}</span>
                    <span class="body">${message.message}</span>`;
    return li;
  },

  render: () => {
    let ul = document.createElement("ul");
    ul.className = "messages";
    const inboxMessages = MessageStore.getInboxMessages();

    for (let i = 0; i < inboxMessages.length; i++) {
      const message = inboxMessages[i];
      const domNode = Inbox.renderMessage(message);
      ul.appendChild(domNode);
    }
    return ul;
  }
};

module.exports = Inbox;