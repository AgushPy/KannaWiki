package com.kannawiki.entidades;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "frase")
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Frase implements Serializable{
	private static final long serialVersionUID = 7030071407758955195L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long idFrase;
	
	private Integer id;
	private String frase;
	@ManyToOne
	private Miembro miembro;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFrase() {
		return frase;
	}
	public void setFrase(String frase) {
		this.frase = frase;
	}
	public Long getIdFrase() {
		return idFrase;
	}
	public void setIdFrase(Long idFrase) {
		this.idFrase = idFrase;
	}
	public Miembro getMiembro() {
		return miembro;
	}
	public void setMiembro(Miembro miembro) {
		this.miembro = miembro;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	
	
}
