package com.Interv.Starwars.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Favourites
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "starwar_id")
	private int starwarId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getStarwarId() {
		return starwarId;
	}

	public void setStarwarId(int starwarId) {
		this.starwarId = starwarId;
	}

	@Override
	public String toString() {
		return "Favourites [id=" + id + ", starwarId=" + starwarId + ", getId()=" + getId() + ", getStarwarId()="
				+ getStarwarId() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}

	
	

}
