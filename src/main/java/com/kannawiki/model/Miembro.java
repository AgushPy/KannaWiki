package com.kannawiki.model;

import java.io.Serializable;
import java.util.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class Miembro {
	
	@Id
	@GeneratedValue
	private Integer id;
	private String name;
	private String username;
	private String discord;
	private String title;
	private Date birthday;
	private String description;
	@OneToMany
	private List<Frase> phrases;
	private String img;
	private String nationality;
	
	public Miembro() {
		
	}
	
	public Miembro(String name, String username, String discord, String title, Date birthday, String description,
			List<Frase> phrases, String img, String nationality) {
		this.name = name;
		this.username = username;
		this.discord = discord;
		this.title = title;
		this.birthday = birthday;
		this.description = description;
		this.phrases = phrases;
		this.img = img;
		this.nationality = nationality;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDiscord() {
		return discord;
	}

	public void setDiscord(String discord) {
		this.discord = discord;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Frase> getPhrases() {
		return phrases;
	}

	public void setPhrases(List<Frase> phrases) {
		this.phrases = phrases;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	
	
	
	
}
