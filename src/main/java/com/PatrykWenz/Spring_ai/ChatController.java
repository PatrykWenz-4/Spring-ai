package com.PatrykWenz.Spring_ai;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.ui.Model;


@RestController
public class ChatController {

    private final ChatModel chatModel;

    public ChatController(ChatModel chatModel){
        this.chatModel = chatModel;
    }

    @GetMapping("/")
    public String prompt(@RequestParam String m){
        return chatModel.call(m);
    }
}
