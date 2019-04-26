package com.bigdata.test;

import java.awt.BorderLayout;
import java.awt.CardLayout;
import java.awt.Container;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.Label;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;


public class test02 {
	private JFrame f;
	private JPanel p;
	private Card c;
	private Card2 c2;
	private static int index,next;
	private static ArrayList<Customer> button;
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		button=new ArrayList<Customer>();
		index=0;
		next=0;
		new test02();
	}
	public test02()
	{
		f=new JFrame();
		f.setSize(600,200);
		p=new JPanel();
		p.setLayout(new GridLayout(0,6,10,0));
		button_add("입력",p);
		button_add("수정",p);
		button_add("삭제",p);
		button_add("<",p);
		button_add(">",p);
		button_add("종료",p);
		c=new Card();
		c2=new Card2();
		f.add(p,BorderLayout.NORTH);
		f.add(c,BorderLayout.SOUTH);
		f.add(c2,BorderLayout.CENTER);
		
		f.setVisible(true);
	}
	public void button_add(String str,Container lab)
	{
		JButton btn=new JButton(str);
		btn.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				if(e.getActionCommand().equals("종료"))System.exit(0);
				else if(e.getActionCommand().equals("<"))
				{
					if(index>0)index--;
					else index=30;
					c.layout.previous(c);
				}
				else if(e.getActionCommand().equals(">"))
				{
					if(index<30)index++;
					else index=0;
					c.layout.next(c);
				}
				else if(e.getActionCommand().equals("입력"))c2.layout2.show(c2,"la1");
				else if(e.getActionCommand().equals("수정"))c2.layout2.show(c2,"la2");
				else if(e.getActionCommand().equals("삭제"))button.get(index).setText("");
			}
		});
		lab.add(btn);
	}
	private class Card extends JPanel
	{
		CardLayout layout;
		Card()
		{
			layout=new CardLayout();
			setLayout(layout);
			for(int i=0;i<=30;i++)
			{
				button.add(new Customer());
				add(button.get(i));
			}
		}
	}
	private class Card2 extends JPanel
	{
		CardLayout layout2;
		Card2()
		{
			layout2=new CardLayout();
			setLayout(layout2);
			add("la1",new la1());
			add("la2",new la2());
		}
	}
	private class la1 extends JLabel
	{
		la1()
		{
			GridLayout gl=new GridLayout(0,9,0,0);
			setLayout(gl);
			JLabel la[]=new JLabel[4];
			la[0]=new JLabel("Name");
			la[1]=new JLabel("SEX");
			la[2]=new JLabel("Email");
			la[3]=new JLabel("Birth");
			
			JTextField text[]=new JTextField[4];
			for(int i=0;i<la.length;i++)
			{
				la[i].setFont(new Font("Verdana",Font.PLAIN,14));
				add(la[i]);
				text[i]=new JTextField(5);
				add(text[i]);
			}
			JButton b=new JButton("입력");
			b.addActionListener(new ActionListener() {
				
				@Override
				public void actionPerformed(ActionEvent e) {
					// TODO Auto-generated method stub
					Customer c=new Customer(text[0].getText(), text[1].getText(), text[2].getText(), Integer.parseInt(text[3].getText()));
					for(int i=0;i<4;i++)text[i].setText("");
					button.get(next).setText(c.toString());
					next++;
				}
			});
			add(b);
		}
	}
	private class la2 extends JLabel
	{
		la2()
		{
			GridLayout gl=new GridLayout(0,9,0,0);
			setLayout(gl);
			JLabel la[]=new JLabel[4];
			la[0]=new JLabel("Name");
			la[1]=new JLabel("SEX");
			la[2]=new JLabel("Email");
			la[3]=new JLabel("Birth");
			
			JTextField text[]=new JTextField[4];
			for(int i=0;i<la.length;i++)
			{
				la[i].setFont(new Font("Verdana",Font.PLAIN,14));
				la[i].setHorizontalAlignment(Label.RIGHT);
				add(la[i]);
				text[i]=new JTextField(5);
				add(text[i]);
			}
			JButton b=new JButton("수정");
			b.addActionListener(new ActionListener() {
				
				@Override
				public void actionPerformed(ActionEvent e) {
					// TODO Auto-generated method stub
					Customer c=new Customer(text[0].getText(), text[1].getText(), text[2].getText(),Integer.parseInt(text[3].getText()));
					for(int i=0;i<4;i++)text[i].setText("");
					button.get(index).setText(c.toString());
				}
			});
			add(b);
		}
	}
	private class Customer extends JButton
	{
		private String name;
		private String sex;
		private String email;
		private int birth;
		Customer(){}
		
		Customer(String a1,String a2,String a3,int a4)
		{
			name=a1;
			sex=a2;
			email=a3;
			birth=a4;
		}
		@Override
		public String toString() {
			return "Customer [name=" + name + ", sex=" + sex + ", email=" + email + ", birth=" + birth + "]";
		}
	}
}
