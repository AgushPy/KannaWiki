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
	private String rango;
	private Date cumpleanios;
	private String descripcion;
	@OneToMany
	private List<Frase> frases;
	
	public Miembro() {
		
	}
	
	public Miembro(String name, String discord, String rango, Date cumpleanios, String descripcion,
			List<Frase> frases) {
		this.name = name;
		this.discord = discord;
		this.rango = rango;
		this.cumpleanios = cumpleanios;
		this.descripcion = descripcion;
		this.frases = frases;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getdiscord() {
		return discord;
	}
	public void setdiscord(String discord) {
		this.discord = discord;
	}
	public Date getCumpleanios() {
		return cumpleanios;
	}
	public void setCumpleanios(Date cumpleanios) {
		this.cumpleanios = cumpleanios;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public List<Frase> getFrases() {
		return frases;
	}
	public void setFrases(List<Frase> frases) {
		this.frases = frases;
	}
	public String getRango() {
		return rango;
	}
	public void setRango(String rango) {
		this.rango = rango;
	}
	
	
	
}
