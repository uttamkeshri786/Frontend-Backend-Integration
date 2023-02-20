Feature: arithmetic operations

  Scenario: client wants to add two numbers
    When the client calls /calculator/add with values '1' and '2'
    Then the client receives answer as 3.0

  Scenario: client wants to subtract two numbers
    When the client calls /calculator/sub with values '5' and '3'
    Then the client receives answer as 2.0

  Scenario: client wants to divide two numbers
    When the client calls /calculator/div with values '6' and '2'
    Then the client receives answer as 3.0


  Scenario Outline: client wants to multiply two numbers
    When the client calls /calculator/mul with values '<input1>' and '<input2>'
    Then the client receives answer as <result>

    Examples:
      | input1  | input2  | result   |
      | 2       | 3       | 6.0      |
      | 4       | 6       | 24.0     |
      | 7       | 8       | 56.0     |