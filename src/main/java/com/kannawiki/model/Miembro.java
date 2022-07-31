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
	
	
	
	
}
