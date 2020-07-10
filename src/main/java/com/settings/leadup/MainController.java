package com.settings.leadup;

import com.settings.leadup.mail.EmailCfg;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MainController {
    @GetMapping("/")
    public String mainPage(){
        return "home";
    }

    @PostMapping("/")
    public void page(){

    }

}
