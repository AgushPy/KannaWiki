package com.kannawiki.entidades;

import java.io.Serializable;
import java.util.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "miembros")
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Miembro implements Serializable {
	private static final long serialVersionUID = 7030071407758955195L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long idMiembro;
	
	private Integer id;
	private String name;
	private String dicord;
	private Date cumpleanios;
	private String descripcion;
	private List<Frase> frases;
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
	public String getDicord() {
		return dicord;
	}
	public void setDicord(String dicord) {
		this.dicord = dicord;
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
	
	
}
