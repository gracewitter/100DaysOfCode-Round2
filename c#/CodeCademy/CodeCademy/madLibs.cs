using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeCademy
{
    class madLibs
    {
        static void Main(string[] args)
        {
            /*
      This program MadLibs
      Author: Grace Witter
      */


            // Let the user know that the program is starting:
            Console.WriteLine("Mad Libs starting in...");
            Console.WriteLine("3...");
            Console.WriteLine("2...");
            Console.WriteLine("1...");

            // Give the Mad Lib a title:
            string title = "COVID Chaos";

            Console.WriteLine(title);
            // Define user input and variables:
            Console.WriteLine("Input a name");
            string mainCharName = Console.ReadLine();

            Console.WriteLine("Input 3 adjectives");
            string adjOne = Console.ReadLine();

            Console.WriteLine("Input 2 more adjectives");
            string adjTwo = Console.ReadLine();


            Console.WriteLine("Input 1 more adjectives");
            string adjThree = Console.ReadLine();


            Console.WriteLine("Input a verb");
            string verb = Console.ReadLine();

            Console.WriteLine("Input 2 nouns");
            string nounOne = Console.ReadLine();

            Console.WriteLine("Input 1 more noun");
            string nounTwo = Console.ReadLine();

            Console.WriteLine("Input an animal");
            string animal = Console.ReadLine();

            Console.WriteLine("Input an food");
            string food = Console.ReadLine();

            Console.WriteLine("Input an fruit");
            string fruit = Console.ReadLine();

            Console.WriteLine("Input an superhero");
            string hero = Console.ReadLine();

            Console.WriteLine("Input an country");
            string country = Console.ReadLine();

            Console.WriteLine("Input a dessert");
            string dessert = Console.ReadLine();

            Console.WriteLine("Input a year");
            string year = Console.ReadLine();

            // The template for the story:

            string story = $"This morning {mainCharName} woke up feeling {adjOne}. 'It is going to be a {adjTwo} day!' Outside, a bunch of {animal}s were protesting to keep {food} in stores. They began to {verb} to the rhythm of the {nounOne}, which made all the {fruit}s very {adjThree}. Concerned, {mainCharName} texted {hero}, who flew {mainCharName} to {country} and dropped {mainCharName} in a puddle of frozen {dessert}. {mainCharName} woke up in the year {year}, in a world where {nounTwo}s ruled the world.";


            // Print the story:
            Console.WriteLine(story);

            Console.ReadLine();
        } 
    }
}
