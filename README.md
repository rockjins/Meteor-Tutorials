#My first python program
希望自己能够坚持下来学习python吧，人生苦短，你懂的......

源码其实很简单，我只是昨晚开始学习python的，写出个小小程序来还挺激动的。

可以clone下来运行试试哦，不过我打包的是window x64的34位的机子貌似不能运行。
```python
#coding:utf-8
print u'请输入您的名字:'
user = raw_input()
def start(user):
	f = open('data.txt')
	scores = f.readlines()
	f.close()
	allData = {}
	for score in scores:
		score = score.split()
		allData[score[0]] = score[1:]
	#print allData.get(user)
	if allData.get(user) is None:
		score = [0,0,0]
		allData[user] = score
		print u'您是第一次进行游戏哦，请记住您的用户名：%s，下次请用%s登录'%(user,user)
	else:
		score = allData.get(user)
		print u'%s，准备好了吗？'%(user)
	game_times = int(score[0])
	min_times = int(score[1])
	total_times = int(score[2])
	if game_times > 0:
		avg_times = float(total_times)/game_times
	else:
		avg_times = 0
	print u'你已经玩了%d次，最少%d轮猜出答案，平均%.2f轮猜出答案'%(game_times,min_times,avg_times)
	#开始游戏
	from random import randint
	def game(game_times,min_times,total_times,allData,user):
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
		game_times = game_times+1
		if count < min_times or min_times == 0:
			min_times = count
		total_times = total_times + count
		allData[user] = [str(game_times),str(min_times),str(total_times)]
		results = []
		for v in allData:
			item = allData.get(v)
			item.insert(0,v)
			item = ' '.join(item)
			item += '\n'
			results.append(item)
		f = file('data.txt','w')
		f.writelines(results)
		f.close()
		print u'回复"1"再玩一次，按回车退出游戏'
		ctn = raw_input()
		if ctn == '1':
			start(user)
	game(game_times,min_times,total_times,allData,user)
start(user)
```
加油，生于忧患，死于安乐。