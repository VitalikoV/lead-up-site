package com.settings.leadup.mail;

import com.settings.leadup.mail.EmailCfg;
import com.settings.leadup.mail.Feedback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Properties;

@RestController
@RequestMapping( value = "/feedback")
public class FeedbackController {

    private EmailCfg emailCfg;

    @Autowired
    public FeedbackController(EmailCfg emailCfg){
        this.emailCfg = emailCfg;
    }

    @PostMapping
    public void sendFeedback(@RequestBody Feedback feedback, BindingResult bindingResult) throws Exception {
//        if(bindingResult.hasErrors()){
//            throw new Exception("Feedback is not valid");
//        }


    JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
    mailSender.setHost(this.emailCfg.getHost());
    mailSender.setPort(this.emailCfg.getPort());
    mailSender.setUsername(this.emailCfg.getUsername());
    mailSender.setPassword(this.emailCfg.getPassword());

        Properties properties = mailSender.getJavaMailProperties();
        properties.put("mail.transport.protocol", "smtp");
        properties.put("mail.smth.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.debug", "true");


        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom(feedback.getEmail());
        mailMessage.setTo("drap877@gmail.com");
        mailMessage.setSubject("New feedback from: " + feedback.getName());
        mailMessage.setText(feedback.getFeedback());

        mailSender.send(mailMessage);

    }
}

