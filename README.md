#这是我的第一个python小程序
希望自己能够坚持下来学习python吧，人生苦短，你懂的......

源码其实很简单，我只是昨晚开始学习python的，写出个小小程序来还挺激动的。
```python
#-*-coding:utf-8-*-
#guess number
from random import randint
num = randint(1,50)
count = 0
bingo = True
print u'1-50之间的随机整数,猜猜是几？'
while bingo:
	answer = raw_input()
	if answer.isdigit():
		answer = int(answer)
		if answer<num:
			print u'%d 太小了!'%answer,

		elif answer>num:
			print u'%d 太大了!'%answer,

		else:
			print u'%d 是正确答案!'%answer,
			bingo = False

		count+=1
		print u'你猜了%d次。'%count
	else:
		print u'请输入整数'
print u'按下回车退出游戏...'
raw_input()
```
加油，生于忧患，死于安乐。