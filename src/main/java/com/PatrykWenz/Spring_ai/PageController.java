package com.PatrykWenz.Spring_ai;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/index.html")
    public String index() {
        return "index";
    }
}
