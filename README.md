30/11/2024

This is a project that implements using AI with spring.

To properly use it first it is needed to install Ollama
https://ollama.com/download

In my case I use model llama3.2 1B 
To download use:
```
ollama pull llama3.2:1b
```

![image](https://github.com/user-attachments/assets/67bc7da5-b159-46b3-a289-7c722f7b1c14)

![image](https://github.com/user-attachments/assets/90b548f3-d191-4750-8d6b-cfbf24172d76)

Project was set up in following matter:

![image](https://github.com/user-attachments/assets/5f180c3f-17ea-4b1c-83f1-c91c45ffd16e)

-----------------------------------------------------------------------------------------

Setting up the basic AI conversation:

![image](https://github.com/user-attachments/assets/6184e027-6625-4bcf-bbe9-e7c4d9e019f7)

In order to begin the conversation we use string 'm' in the address bar of web browser.
For example:
http://localhost:8080/?m=hi


![image](https://github.com/user-attachments/assets/e7654770-42b0-4eff-b507-671e19c14806)

-----------------------------------------------------------------------------------------

The occuring problems with this implementation:
- No chat memory
- No proper input bar
- No chat history

----------------------------------------------------------------------------------------

React FrontEnd

In terminal:
```
npx create-react-app ai-chat
cd ai-chat
npm start
```



