package com.rest.api.calculator.cucumber;

import com.rest.api.calculator.SpringCucumberApplication;

import cucumber.api.CucumberOptions;

import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(
        classes = SpringCucumberApplication.class,
        webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@CucumberOptions(
        features = "src/test/resources/features/",
        glue = "com.rest.api.calculator.cucumber",        
        tags = {"@SmokeTests"})
/**
 *
 * @author Uttam
 * Cucumber TestRunner
 *
 */
public abstract class SpringIntegrationTest {

    protected RestTemplate restTemplate = new RestTemplate();

    protected final String DEFAULT_URL = "http://localhost:8087/";
}