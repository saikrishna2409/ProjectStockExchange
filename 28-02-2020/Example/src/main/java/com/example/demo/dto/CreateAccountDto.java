package com.example.demo.dto;

public class CreateAccountDto {
	private int id;
	private String username;
	private String password;
	private String rpassword;
	private String email;
	private long mobile;
	public CreateAccountDto(int id, String username, String password, String rpassword, String email, long mobile) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.rpassword = rpassword;
		this.email = email;
		this.mobile = mobile;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRpassword() {
		return rpassword;
	}
	public void setRpassword(String rpassword) {
		this.rpassword = rpassword;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	@Override
	public String toString() {
		return "CreateAccountDto [id=" + id + ", username=" + username + ", password=" + password + ", rpassword="
				+ rpassword + ", email=" + email + ", mobile=" + mobile + "]";
	}
	
}
