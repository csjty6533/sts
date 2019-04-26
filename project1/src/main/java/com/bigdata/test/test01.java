package com.bigdata.test;

import java.util.ArrayList;
import java.util.Scanner;

public class test01 {
	
	private static ArrayList<Customer> v;
	private static int index;
	private Scanner scn=new Scanner(System.in);
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		v=new ArrayList<Customer>();
		index=0;
		System.out.println("고객정보관리 >> /:입력  P:앞으로  N:뒤로  U:수정  D:삭제  Q:나가기  >>");
		new test01();
	}
	 public test01()
	 {
	 	while(scn.hasNext())
	 	{
	 		System.out.print(">>");
			String a=scn.nextLine();
			if(a.equals("/"))insert(false);
			else if(!v.isEmpty())
			{
					if(a.equals("n"))
					{
						index++;
						if(v.size()>index)v.get(index).print();
						else System.out.println("null");
					}
					else if(a.equals("p"))
					{	
						index--;
						if(v.size()>index&&index>=0)v.get(index).print();
						else System.out.println("null");
					}
					else if(a.equals("u"))
					{
						if(v.size()>index)
						{
							v.get(index).print();
							v.remove(index);
							insert(true);
						}
					}
					else if(a.equals("d"))
					{
						if(v.size()>index)v.remove(index);
					}
			}
			else if(a.equals("Q"))break;
	 	}
	 }
	 void insert(boolean a1)
		{
			System.out.print("이름>>");
			String name=scn.nextLine();
			System.out.print("성별>>");
			String sex=scn.nextLine();
			System.out.print("이메일>>");
			String email=scn.nextLine();
			System.out.print("출생년도>>");
			int birth=scn.nextInt();
			Customer c=new Customer(name, sex, email, birth);
			if(a1)v.add(index,c);
			else v.add(c);
		}
	private class Customer
	{
		private String name;
		private String sex;
		private String email;
		private int birth;
		Customer(String a1,String a2,String a3,int a4)
		{
			name=a1;
			sex=a2;
			email=a3;
			birth=a4;
		}
		void print()
		{
			System.out.println(name+" "+sex+" "+email+" "+birth);
		}
	}
}

