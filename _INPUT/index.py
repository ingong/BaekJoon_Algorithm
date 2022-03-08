# 재귀 깊이 설정
# sys.setrecursionlimit(10**8) : pypy 에서는 불가능
import sys

def input():
  return sys.stdin.readline().rstrip()

for T in range(int(input())):
  string = input()
