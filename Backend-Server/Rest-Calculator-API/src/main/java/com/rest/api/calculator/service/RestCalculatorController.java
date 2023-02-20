package com.rest.api.calculator.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

/*
 * @author Uttam Keshri
 */

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/calculator")
public class RestCalculatorController {
    
    private static final Logger logger = LoggerFactory.getLogger(RestCalculatorController.class);
	@RequestMapping("/add") 
    public double add(@RequestParam(value="a") String a, @RequestParam(value="b") String b) {
		double sum = 0;
		logger.info("Initially the sum value is : {}",sum);
		try{
			double input1 = Double.parseDouble(a);
			logger.debug("Addition input1 : {}", input1);
			double input2 = Double.parseDouble(b);
			logger.debug("Addition input2 : {}", input2);
			sum = input1 + input2;
		} catch (Exception e) {
		    logger.error("An exception occurred! Please provide valid input {}", e);
		    throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Invalid Input", e);
			
		}
		logger.debug("Addition sum result : {}", sum);
		return sum;
    }
	
	@RequestMapping("/sub")
    public double sub(@RequestParam(value="a") String a, @RequestParam(value="b") String b) {
		double diff = 0;
		logger.info("Initially the diff value is : {}", diff);
		try{
			double input1 = Double.parseDouble(a);
			logger.debug("Subtraction input1 : {}",input1);
			double input2 = Double.parseDouble(b);
			logger.debug("Subtraction input2 : {}",input2);
			diff = input1 - input2;
			
		} catch (Exception e) {
		    logger.error("An exception occurred! Please provide valid input {}", e);
			throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Invalid Input", e);
		}
		logger.debug("Subtraction difference result : {}", diff);
		return diff;
    }
	
	@RequestMapping("/mul")
    public double mul(@RequestParam(value="a") String a, @RequestParam(value="b") String b) {
		double prod = 0;
		logger.info("Initially the diff value is : {}", prod);
		try{
			double input1 = Double.parseDouble(a);
			logger.debug("Multiplication input1 : {}", input1);
			double input2 = Double.parseDouble(b);
			logger.debug("Multiplication input2 : {}", input2);
			prod = input1 * input2;
		} catch (Exception e) {
		    logger.error("An exception occurred! Please provide valid input {}", e);
			throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Invalid Input", e);
		}
		logger.debug("Multiplication product result : {}", prod);
		return prod;
    }
	
	@RequestMapping("/div")
    public double div(@RequestParam(value="a") String a, @RequestParam(value="b") String b) {
		double division = 0;
		logger.info("Initially the division value is : {}", division);
		boolean invalidDenominator = false;
		try{
			double input1 = Double.parseDouble(a);
			logger.debug("Division input1 : {}", input1);
			double input2 = Double.parseDouble(b);
			logger.debug("Division input2 : {}", input2);
			if (input2 != 0.0) {
				division = input1 / input2;
			} else {
				invalidDenominator = true;
			}
		} catch (Exception e) {
		    logger.error("An exception occurred! Please provide valid input {}", e);
			throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Invalid Input", e);
		}
		
		if (invalidDenominator) {
		    logger.error("An exception occurred! Denominator can't be zero {}", invalidDenominator);
			throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Invalid Denominator");
		}
		logger.debug("Division result : {}", division);
		return division;
    }
}