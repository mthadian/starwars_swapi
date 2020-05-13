package com.Interv.Starwars.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
*
* @author PMMuthama
*/

@Controller
public class ViewController
{
	@GetMapping("/")
	public String homePage()
	{
		return "home/index";
	}
	
	
	@GetMapping("/details")
	public String details()
	{
		return "home/details";
	}


}


