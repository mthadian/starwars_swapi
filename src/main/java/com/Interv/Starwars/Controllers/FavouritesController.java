package com.Interv.Starwars.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Interv.Starwars.Models.Favourites;
import com.Interv.Starwars.Repositories.FavouritesRepository;

/**
*
* @author PMMuthama
*/

@RestController
public class FavouritesController
{

	@Autowired
	FavouritesRepository favouritesRepository;
	
	@PostMapping("/api/sw/swid/{starwarId}")
	public ResponseEntity<?> addFavourite(@PathVariable("starwarId") int starwarId) throws Exception
	{
		Favourites favourite=new Favourites();
		
		if(favouritesRepository.findByStarwarId(starwarId).isPresent())
		{
			//favouritesRepository.deleteByStarwarId(starwarId);
			favouritesRepository.deleteById(favouritesRepository.findByStarwarId(starwarId).get().getId());
			throw new Exception("Favourite Deleted");
		}
		if(favouritesRepository.findAll().size()>=5)
		{
			throw new Exception("You have reached maximum number of favourites, 5");
		}
		
		favourite.setStarwarId(starwarId);
		favouritesRepository.save(favourite);
		
		return new ResponseEntity<>(favourite,HttpStatus.OK);
	}
	
	@DeleteMapping("/api/sw/swid/{starwarId}")
	public ResponseEntity<?> deleteFavourite(@PathVariable("starwarId") int starwarId) throws Exception
	{
		
		if(!favouritesRepository.findByStarwarId(starwarId).isPresent())
		{
			
			throw new Exception("This favourite doesn't exist");
		}
		
		favouritesRepository.deleteByStarwarId(starwarId);
		
		return new ResponseEntity<>(starwarId+" Deleted",HttpStatus.OK);
	}
	
	@GetMapping("api/sw/swid/{starwarId}")
	public ResponseEntity<?> findById(@PathVariable("starwarId") int starwarId) throws Exception
	{
		
		List<Favourites> list_Favourite=new ArrayList<Favourites>();
		if(favouritesRepository.findByStarwarId(starwarId).isPresent())
		{
			list_Favourite.add(favouritesRepository.findByStarwarId(starwarId).get());
		}
		
		
		return new ResponseEntity<>(list_Favourite,HttpStatus.OK);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
