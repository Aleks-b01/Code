# *****************************
# * = Simple Blackjack game = *
# * Author: @migrmrz          *
# * Date: 04/22/19            *
# *****************************

import os
import time


class Deck():
    """
    Class that defines a deck to be used in the game
    """
    def __init__(self):
        """
        Initialization of a full ordered deck with suits and cards
        """
        self.suits = ['C', 'H', 'D', 'S']
        self.cards = [
            '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
        ]
        self.full_deck = []
        for suit in self.suits:
            for card in self.cards:
                self.full_deck.append(suit + card)

    def __str__(self):
        """
        String representation that returns the whole deck in a list format
        """
        clubs = []
        hearts = []
        diamonds = []
        spades = []
        for suit in self.suits:
            for card in self.cards:
                if suit == "C":
                    clubs.append(suit + card)
                elif suit == "H":
                    hearts.append(suit + card)
                elif suit == "D":
                    diamonds.append(suit + card)
                else:
                    spades.append(suit + card)
        return ("Here is the full deck: \n\n"
                f"Clubs: {clubs}\n"
                f"Hearts: {hearts}\n"
                f"Diamonds: {diamonds}\n"
                f"Spades: {spades}")

    def shuffle(self):
        """
        Function that shuffles the deck
        """
        deck_as_set = set(self.full_deck)
        return list(deck_as_set)


class Player():
    """
    Class that defines a Player that starts with $100 to bet
    """
    def __init__(self, hand=[], bet=0, score=0, money=100):
        # Hand should be a list of the cards taken from the deck
        self.hand = hand
        self.bet = bet
        self.score = score
        self.money = money

    def set_betting_amount(self):
        while True:
            try:
                self.bet = int(
                    input(f"How much is your bet? (1-{self.money}): ")
                )
                if self.bet > self.money:
                    print("You don't have enough funds!")
                    continue
            except ValueError:
                print("You need to enter a valid number!")
                continue
            else:
                break

    def calculate_hand_score(self, hand):
        """
        Function that calculates the total on a player's hand
        """
        # Min and max values in case there is an Ace on the hand. Min will be
        # calculated with Ace value as 1 and Max with Ace value as 11. At the
        # end the closest value to 21 without exceeding it, will be returned.
        # Otherwise, if there was no Ace, min and max are equals and any can
        # be returned.
        min = 0
        max = 0
        ace_flag = False
        for card in hand:
            if card[1] == "A" and ace_flag is True:
                min += 1
                max += 1
            elif card[1] == "A" and ace_flag is False:
                ace_flag = True
                min += 1
                max += 11
            elif card[1] == "J" or card[1] == "Q" or card[1] == "K":
                min += 10
                max += 10
            elif int(card[1:]) in range(2, 11):
                min += int(card[1:])
                max += int(card[1:])
        if max == min:
            score = min
        elif max <= 21:
            score = max
        elif max > 21:
            score = min
        return score

    def calculate_win(self, win_amount):
        """
        Function that calculates the total amount of money after a win
        """
        self.money += win_amount

    def calculate_loss(self, lost_amount):
        """
        Function that calculates the total amount of money after a loss
        """
        self.money -= lost_amount


# ###################### Game's main functions ######################

def create_and_suffle_deck():
    """ Function that creates an instance of a Deck and then shuffles it
    """
    deck = Deck()
    print(deck)
    time.sleep(1)
    print("\nShuffling deck...")
    # Variable that will store the list containing the full deck after shuffle
    shuffled_deck = deck.shuffle()
    time.sleep(1)
    print("\nDone!\n")
    return shuffled_deck


def initial_deal(player1, shuffled_deck):
    """
    Function that will deal cards to players
    """
    # Creating an instance of a player for Dealer, assigning 2 cards from the
    # deck
    dealer = Player([shuffled_deck.pop(), shuffled_deck.pop()])
    time.sleep(1)
    # Will only print the first card and the second "face down" (X)
    print(f"\n\nDealer: ['{dealer.hand[0]}', 'XX']\n\n")
    # Adding two cards to the Player's hand
    player1.hand = [shuffled_deck.pop(), shuffled_deck.pop()]
    player1.score = player1.calculate_hand_score(player1.hand)
    time.sleep(1)
    print(f"Player 1 Hand: {player1.hand}")
    print(f"Player 1 Score: {player1.score}\n")
    if player1.score == 21:
        print("Blackjack!\n\n")
    return player1, dealer


def deal_dealers_hand():
    """Function that will simulate the dealers play once the player stands
    """
    print("[" + "'" + dealer.hand[0] + "'" + ", XX ]")
    time.sleep(1)
    print(dealer.hand)
    dealer.score = dealer.calculate_hand_score(dealer.hand)
    while dealer.score < player1.score:
        time.sleep(1)
        new_dealer_card = shuffled_deck.pop()
        dealer.hand.append(new_dealer_card)
        print(dealer.hand)
        dealer.score = dealer.calculate_hand_score(dealer.hand)
    print(f"Score: {dealer.score}\n\n")


# ###################### Main piece of code ######################

game_on = "Y"
while game_on == "Y":
    os.system('cls')
    print("\n\t\tWelcome to Blackjack!\n")
    time.sleep(1)
    # Creating an instance of a deck and shuffling it in case player is playing
    # for the first time or if there are less than 10 cards available
    if 'shuffled_deck' not in globals():
        shuffled_deck = create_and_suffle_deck()
    elif len(shuffled_deck) < 10:
        print("Deck is almost over. We need to shuffle again!\n")
        shuffled_deck = create_and_suffle_deck()
    # Setting the default betting amount if player hasn't played before
    if 'money' not in globals():
        money = 100
    # Check if user has enough money to bet (in case he has kept playing)
    if money == 0:
        print("You don't have any money left!\nGoodbye!")
        game_on = "N"
        break
    # Ask for the betting amount
    player1 = Player(money=money)
    player1.set_betting_amount()
    time.sleep(1)
    # Deal cards and assign each hand to the player and dealer
    player1, dealer = initial_deal(player1, shuffled_deck)
    # Variable that will contain the response from the user to hit or stand
    move = ""
    while move != "S":
        move = input("Press enter to hit, enter 'S' to stand: ").upper()
        if move == "":  # User chose to hit
            print("User chose to hit")
            # A card is then removed from the shuffled deck,
            # appended to the player's hand and then printed
            player1.hand.append(shuffled_deck.pop())
            print(f"Player 1: {player1.hand}\n")
            # Now the score needs to be calculated and printed as well
            player1.score = player1.calculate_hand_score(player1.hand)
            print(f"Score: {player1.score}")
            # Validates if player exceeded 21 (Busted)
            if player1.score > 21:
                print("Busted!")
                print(f"Bet was: {player1.bet}")
                player1.calculate_loss(player1.bet)
                print(f"Money: {player1.money}")
                break
            elif player1.score == 21:
                print("Blackjack!")
        elif move == "S":
            # Add a call to a function that will play the dealer's hand and
            # then checks who wins or if there is a tie
            print("User chose to stand")
            deal_dealers_hand()
            if dealer.score > player1.score and dealer.score <= 21:
                print("Player 1 loses!")
                player1.calculate_loss(player1.bet)
            elif dealer.score == player1.score:
                print("It's a tie!")
            else:
                print("Player 1 wins!")
                player1.calculate_win(player1.bet)
    # Ask to the player if he would like to contine playing
    while True:
        game_on = input("\nYou want to play again? (Y/N): ").upper()
        if game_on == "Y" or game_on == "N":
            money = player1.money
            break
        else:
            continue
