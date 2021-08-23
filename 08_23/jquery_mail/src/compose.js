const MessageStore = require("./message_store.js");

const Compose = {
  render: () => {
    const div = document.createElement("div");
    div.className = "new-message";
    div.innerHTML = Compose.renderForm();
    div.addEventListener("change", (event) => {
      const e = event.target;
      const changedName = e.name;
      MessageStore.updateDraftField(changedName, e.value);
    });

    div.addEventListener("submit", (event) => {
      event.preventDefault();
      MessageStore.sendDraft();
      console.log("should have submitted")
      window.location.hash = "inbox";
    });
    return div;
  },

  renderForm: () => {
    const draft = MessageStore.getMessageDraft();
    const form = `<p class="new-message-header">New Message</p>
                  <form class="compose-form">
                    <input type="text" name="to" value="${draft.to}" placeholder="Recipient">
                    <input type="text" name="subject" value="${draft.subject}" placeholder="Subject">
                    <textarea name="message" rows="20">${draft.message}</textarea>
                    <button type="submit" class="btn btn-primary submit-message">Send</button>
                  </form>`
    return form;
  },
};

module.exports = Compose;