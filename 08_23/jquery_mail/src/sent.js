const MessageStore = require("./message_store.js");

const Sent = {
  renderMessage: (message) => {
    const li = document.createElement("li");
    li.className = "message";
    li.innerHTML = `<span class="from">${message.to}</span>
                    <span class="subject">${message.subject}</span>
                    <span class="body">${message.message}</span>`;
    return li;
  },

  render: () => {
    let ul = document.createElement("ul");
    ul.className = "messages";
    const sentMessages = MessageStore.getSentMessages();

    for (let i = 0; i < sentMessages.length; i++) {
      const message = sentMessages[i];
      const domNode = Sent.renderMessage(message);
      ul.appendChild(domNode);
    }
    return ul;
  }
};

module.exports = Sent;