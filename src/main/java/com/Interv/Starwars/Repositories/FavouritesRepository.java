package com.Interv.Starwars.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Interv.Starwars.Models.Favourites;

public interface FavouritesRepository extends JpaRepository<Favourites, Integer> 
{

	Optional<Favourites> findByStarwarId(int starwarId);
	Favourites deleteByStarwarId(int starwarId);
}
