import random
card = 0
card1 = 0
card12 = 0
card13 = 0
suit = 0
suit1 = 0
cardDealer = ''
cardsDealer = []
dealerHasAce = 0
cardPlayer = ''
cardsPlayer = []
playerHasAce = 0
card1Player = ''
valueDealer = 0
valuePlayer = 0

def play():
	card = int(random.randint(1, 13))
	suit = int(random.randint(1, 4))
	evaluateDealer()

def evaluateDealer():
	if card == 1:
		dealerHasAce += 1
		valueDealer += 11
	elif card == 2:
		valueDealer += 2
	elif card == 3:
		valueDealer += 3
	elif card == 4:
		valueDealer += 4
	elif card == 5:
		valueDealer += 5
	elif card == 6:
		valueDealer += 6
	elif card == 7:
		valueDealer += 7
	elif card == 8:
		valueDealer += 8
	elif card == 9:
		valueDealer += 9
	elif card == 10 || card == 11 || card == 12 || card == 13:
		valueDealer += 10
	processDealer()

def processDealer():
	if card == 1:
		cardDealer = 'A'
	elif card == 2:
		cardDealer = '2'
	elif card == 3:
		cardDealer = '3'
	elif card == 4:
		cardDealer = '4'
	elif card == 5:
		cardDealer == '5'
	elif card == 6:
		cardDealer = '6'
	elif card == 7:
		cardDealer = '7'
	elif card == 8:
		cardDealer = '8'
	elif card == 9:
		cardDealer = '9'
	elif card == 10:
		cardDealer = '10'
	elif card == 11:
		cardDealer = 'J'
	elif card == 12:
		cardDealer = 'Q'
	elif card == 13:
		cardDealer = 'K'
	drawDealer()

def drawDealer():
	temp = cardDealer
	if suit == 1:
		cardDealer = temp + 'H'
		print("Dealer: " + cardDealer)
	elif suit == 2:
		cardDealer = temp + 'D'
		print("Dealer: " + cardDealer)
	elif suit == 3:
		cardDealer = temp + 'C'
		print("Dealer: " + cardDealer)
	elif suit == 4:
		cardDealer = temp + 'S'
		print("Dealer: " + cardDealer)
	card = int(random.randint(1, 13))
	card1 = int(random.randint(1, 13))
	suit = int(random.randint(1, 4))
	suit1 = int(random.randinr(1, 4))
	evaluatePlayer()

def evaluatePlayer():
	if card == 1:
		playerHasAce += 1
		valuePlayer += 11
	elif card == 2:
		valuePlayer += 2
	elif card == 3:
		valuePlayer += 3
	elif card == 4:
		valuePlayer += 4
	elif card == 5:
		valuePlayer += 5
	elif card == 6
		valuePlayer += 6
	elif card == 7
		valuePlayer += 7
	elif card == 8
		valuePlayer += 8
	elif card == 9
		valuePlayer += 9
	elif card == 10 || card == 11 || card == 12 || card == 13
		valuePlayer += 10
	processPlayer()

def evaluatePlayer1():
	if card1 == 1:
		playerHasAce += 1
		valuePlayer += 11
	elif card1 == 2:
		valuePlayer += 2
	elif card1 == 3:
		valuePlayer += 3
	elif card1 == 4:
		valuePlayer += 4
	elif card1 == 5:
		valuePlayer += 5
	elif card1 == 6
		valuePlayer += 6
	elif card1 == 7
		valuePlayer += 7
	elif card1 == 8
		valuePlayer += 8
	elif card1 == 9
		valuePlayer += 9
	elif card1 == 10 || card == 11 || card == 12 || card == 13
		valuePlayer += 10
	card12 = 1
	processPlayer1()

def processPlayer():
	if card == 1:
		cardPlayer = 'A'
	elif card == 2:
		cardPlayer = '2'
	elif card == 3:
		cardPlayer = '3'
	elif card == 4:
		cardPlayer = '4'
	elif card == 5:
		cardPlayer == '5'
	elif card == 6:
		cardPlayer = '6'
	elif card == 7:
		cardPlayer = '7'
	elif card == 8:
		cardPlayer = '8'
	elif card == 9:
		cardPlayer = '9'
	elif card == 10:
		cardPlayer = '10'
	elif card == 11:
		cardPlayer = 'J'
	elif card == 12:
		cardDealer = 'Q'
	elif card == 13:
		cardPlayer = 'K'
	drawPlayer()

def processPlayer1():
	if card1 == 1:
		cardPlayer = 'A'
	elif card1 == 2:
		cardPlayer = '2'
	elif card1 == 3:
		cardPlayer = '3'
	elif card1 == 4:
		cardPlayer = '4'
	elif card1 == 5:
		cardPlayer == '5'
	elif card1 == 6:
		cardPlayer = '6'
	elif card1 == 7:
		cardPlayer = '7'
	elif card1 == 8:
		cardPlayer = '8'
	elif card1 == 9:
		cardPlayer = '9'
	elif card1 == 10:
		cardPlayer = '10'
	elif card1 == 11:
		cardPlayer = 'J'
	elif card1 == 12:
		cardDealer = 'Q'
	elif card1 == 13:
		cardPlayer = 'K'
	drawPlayer1()

def drawPlayer1():
	temp = cardPlayer
	elif suit1 == 1:
		cardPlayer = temp + 'H'
		print("Player: " + cardPlayer)
	elif suit1 == 2:
		cardPlayer = temp + 'D'
		print("Player: " + cardPlayer)
	elif suit1 == 3:
		cardPlayer = temp + 'C'
		print("Player: " + cardPlayer)
	elif suit1 == 4:
		cardPlayer = temp + 'S'
		print("Player: " + cardPlayer)

def drawPlayer():
	temp = cardPlayer
	if card12 == 0:
		evaluatePlayer1()
	elif suit == 1:
		cardPlayer = temp + 'H'
		print("Player: " + cardPlayer)
	elif suit == 2:
		cardPlayer = temp + 'D'
		print("Player: " + cardPlayer)
	elif suit == 3:
		cardPlayer = temp + 'C'
		print("Player: " + cardPlayer)
	elif suit == 4:
		cardPlayer = temp + 'S'
		print("Player: " + cardPlayer)

def checkWin():
	if valuePlayer > 21:
		return 1
	elif valuePlayer <= 21:
		return 0
	
