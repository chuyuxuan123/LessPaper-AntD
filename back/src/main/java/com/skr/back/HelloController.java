package com.skr.back;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController{

    @RequestMapping(path="/")
    public String hello(){
        return "Hello world!";
    }
}