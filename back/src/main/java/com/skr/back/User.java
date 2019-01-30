package com.skr.back;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class User {

	@Id
	private String name;

	private String password;

	//1:teacher 2:student
	private Integer identity;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getIdentity(){
		return identity;
	}

	public void setIdentity(Integer i){
		this.identity = i;
	}

	public String toString() {
		return " name: " + name + " password: " + password;
	}

}