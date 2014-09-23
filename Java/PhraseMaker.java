public class PhraseMaker {
  public static void main (String[] args) {

    String[] adjective = {"Angry","Happy","Jumpy","Grumpy","Hungry","Fat","Shaggy","Bearded","Ecstatic","Athletic","Lazy","Skinny","Malnourished", "Green", "Purple", "Pink", "Blue", "Yellow", "Loud", "Obnoxious", "Afraid", "Frightened", "Cheesy"};

    String[] noun = {"beaver", "bear", "panda", "lobster", "lady", "leprechaun", "fairy", "snake", "stereo", "steak", "chili pepper", "monkey", "boy", "cheese", "nerd", "jerk", "tofu", "penguin"};

    String[] action = {"danced", "barfed", "jumped", "slithered", "ran", "ate", "made out", "ran for congress", "voted", "pooped", "slapped", "licked", "played", "stripped", "dressed", "flapped its monstrous wings"};

    int adjectiveLength = adjective.length;
    int nounLength = noun.length;
    int actionLength = action.length;

    int adjectiveRand = (int) (Math.random() * adjectiveLength);
    int nounRand = (int) (Math.random() * nounLength);
    int actionRand = (int) (Math.random() * actionLength);

    String phrase = adjective[adjectiveRand] + " " + noun[nounRand] + "s " + action[actionRand] + " all over the new carpet.";

    System.out.println("Your phrase is: " + phrase);
  }
}