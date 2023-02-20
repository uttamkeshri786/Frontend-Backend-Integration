package com.rest.api.calculator.cucumber;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;

public class CalculatorStepDefinitions extends SpringIntegrationTest {
    
    private static final double DELTA = 1e-15;

    double response = 0.0;
    String url = DEFAULT_URL + "calculator/";

    @When("the client calls \\/calculator\\/add with values {string} and {string}")
    public void the_client_calls_arithmetic_add_with_values_and(String a, String b) {
        response = restTemplate.getForObject(url + "add?a=" +
                a + "&b=" + b, Double.class);
    }

    @Then("the client receives answer as {double}")
    public void the_client_receives_answer_as(double result) {
        Assert.assertEquals(result, response, DELTA);
    }

    @When("the client calls \\/calculator\\/sub with values {string} and {string}")
    public void the_client_calls_calc_sub_with_values_and(String a, String b) {
        response = restTemplate.getForObject(url + "sub?a=" +
                a + "&b=" + b, Double.class);
    }

    @When("the client calls \\/calculator\\/mul with values {string} and {string}")
    public void the_client_calls_calc_mul_with_values_and(String a, String b) {
        response = restTemplate.getForObject(url + "mul?a=" +
                a + "&b=" + b, Double.class);
    }

    @When("the client calls \\/calculator\\/div with values {string} and {string}")
    public void the_client_calls_calc_div_with_values_and(String a, String b) {
        response = restTemplate.getForObject(url + "div?a=" +
                a + "&b=" + b, Double.class);
    }
}