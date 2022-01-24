#include<iostream>
using namespace std;

struct Node{
    int data;
    struct Node *next; 
};

class A{
    vois stack(int a){
    int size=5;
   int arr[size];
   int top=-1;
   if(top==size){
       cout<<"Stack Full";
   }
   else{
       top++
       arr[top]=a;
   }
   for(int i=0;i<5;i++){
       cout<<arr[i]<<"\n";
   }
    }
    
}

int main(){
    A a;
    int b;
    cout<<"Enter data";
    cin>>b;
    a.stack(b);
}