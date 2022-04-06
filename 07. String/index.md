## [17609 회문](https://www.acmicpc.net/problem/17609)<br>

### 접근

투포인터를 활용한 문제이다. del_cnt 가 2 가 되면 더 이상 탐색을 하지 않고 종료한다.
만약 다른 문자를 만난다면 (start + 1, end) 과 (start, end - 1) 을 함수의 인자로 전달하여 탐색한다

### 알고리즘

투포인터

### 기타

문자열 문제는 파이썬을 활용해 풀자

### REFERENCE

[Link](https://github.com/tony9402/baekjoon/blob/main/solution/string/17609/main.py)
