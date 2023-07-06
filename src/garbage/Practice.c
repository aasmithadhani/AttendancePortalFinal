// #include<conio.h> 
#include<stdio.h> 
#include<time.h> 
#include<stdlib.h> 
int binarySearch(int arr[], int l, int r, int x) 
{ if (r>=l) 
{ int mid=(r+l)/2; 
if (arr[mid]==arr[x]) 
{ return mid; 
} 
if (arr[mid]>arr[x]) 
{ return binarySearch(arr, l, mid-1, x); 
} 
return binarySearch(arr, mid+1, r, x); 
} 
return -1; 
} 
void bubbleSort(int arr[], int n) 
{ int i, j, temp; for 
(i=0; i<n-1; i++) 
{ for (j=0; j<n-i-1; j++) 
{ 
    if (arr[j]>arr[j+1]) 
{ 
    temp=arr[j]; 
arr[j]=arr[j+1]; 
arr[j+1]=temp; 
} 
} 

} 
} 


void main() 
{ 
    int x, c; int len=10000; 
clock_t start_t, end_t; 
double total_t; 
int arr[len]; 

for(int i=0;i<len;i++) 
{ 
    arr[i]=(rand()%len); 
} 
bubbleSort(arr,len); 
x=binarySearch(arr,0,len,len); 
start_t=clock(); 
c=binarySearch(arr,0,len,x); 
end_t=clock();
if(c==-1) 
{ printf("Element not present\n"); 
} 
else 
{ 
//printf("Found element at index : %d\n",c); 
} 
total_t=(double)(end_t-start_t); 
printf("Worst case time : %f\n",total_t); 
x=binarySearch(arr,0,len,len/2); 
start_t=clock(); 
c=binarySearch(arr,0,len,x); 
end_t=clock(); if(c==-1) 
{ printf("Element not present\n"); 
} 
else 
{ 
//printf("Found element at index : %d\n",c); 
} 
total_t=(double)(end_t-start_t); 
printf("Best case time : %f\n",total_t); 
x=binarySearch(arr,0,len,len/4);
start_t=clock(); 
c=binarySearch(arr,0,len,x); 
end_t=clock(); if(c==-1) 

{ printf("Element not present\n"); 
} 
else 
{ 
//printf("Found element at index : %d\n",c); 
} 
total_t=(double)(end_t-start_t); 
printf("Avrerage case : %f\n",total_t); 
// getch(); 
}