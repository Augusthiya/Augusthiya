function chatbot(input) {
  let output = "";
  input = input.toLowerCase().trim();  // Clean input (remove extra spaces)

  // Greeting
  if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
    output = "Hello! Welcome to PIGEON Customer Care. How can I assist you today? 😊\nHere are some things I can help with:\n1. Order Status\n2. Returns & Refunds\n3. Shipping Information\n4. Account Help\n5. Product Information";
  } 
  // Asking how the bot is doing
  else if (input.includes("how are you")) {
    output = "I'm doing great, thank you for asking! How can I assist you today with your PIGEON order or account?";
  } 
  // Checking order status
  else if (input.includes("order status") || input.includes("track my order")) {
    output = "To help you with your order status, please provide the order number, and I'll look it up for you!";
  } 
  // Providing order status
  else if (input.includes("order number")) {
    output = "Thank you! I'm checking your order status now. Please give me a moment... (Assuming order number is provided).\nYour order is expected to arrive on [Date]. Would you like to modify or track your order further?";
  } 
  // Returns and refunds
  else if (input.includes("return") || input.includes("refund")) {
    output = "If you'd like to return an item or request a refund, please let me know your order number, and I'll guide you through the process!";
  } 
  else if (input.includes("how do i return an item") || input.includes("how to get a refund")) {
    output = "To return an item, go to 'Your Orders' on PIGEON, select the item you want to return, and follow the steps for a refund. If you need more help, I can assist you through the process.";
  }
  // Shipping information
  else if (input.includes("shipping") || input.includes("delivery")) {
    output = "Can you please provide the tracking number or your order number? I'll help you check the shipping status.";
  }
  // Shipping delay
  else if (input.includes("delayed") || input.includes("late delivery")) {
    output = "I'm sorry to hear your delivery is delayed. Let me check the current status for you. Please provide your order number or tracking number.";
  }
  // Account-related issues
  else if (input.includes("account") || input.includes("sign in") || input.includes("password")) {
    output = "If you're having trouble with your PIGEON account or logging in, you can reset your password by following the instructions on the sign-in page. If you'd like more help, I can guide you through the process.";
  }
  // Forgot password
  else if (input.includes("forgot password")) {
    output = "No worries! You can reset your password by visiting the PIGEON account recovery page. Just click on 'Forgot Password?' and follow the prompts. Let me know if you need more help!";
  }
  // Product inquiries
  else if (input.includes("product information") || input.includes("about a product")) {
    output = "Sure! Could you please provide the name or ID of the product you're asking about? I'll get the details for you.";
  } 
  // Shipping and delivery time
  else if (input.includes("when will my order arrive") || input.includes("delivery time")) {
    output = "I can help with that! Please provide your order number or tracking number, and I'll check the delivery time for you.";
  } 
  // Feedback or ratings
  else if (input.includes("leave feedback") || input.includes("product review")) {
    output = "If you'd like to leave feedback on a product, just go to the product page and scroll down to the reviews section. You can add your rating and comments there!";
  }
  // Help with an issue
  else if (input.includes("help") || input.includes("assistance")) {
    output = "I'm here to assist you! What specific issue can I help you with today? Feel free to ask about order status, returns, shipping, or your PIGEON account.";
  }
  // Common unknown inquiries
  else {
    output = "I'm sorry, I didn't quite catch that. Can you please provide more details or ask something else related to your PIGEON order or account?";
  }

  return output;
}

  // Display the user message on the chat
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Display the bot message on the chat
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Send the user message and get the bot response
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);

  // Add a keypress event listener to the input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });