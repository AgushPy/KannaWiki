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
	private String discord;
	private String title;
	private Date birthday;
	private String description;
	@OneToMany
	private List<Frase> phrases;
	
	public Miembro() {
		
	}
	
	public Miembro(String name, String discord, String title, Date birthday, String description,
			List<Frase> phrases) {
		this.name = name;
		this.discord = discord;
		this.title = title;
		this.birthday = birthday;
		this.description = description;
		this.phrases = phrases;
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
	
	
	
	
}
