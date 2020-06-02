using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeCademy
{
    class trueOrFalse
    {
        static void Main(string[] args)
        {
            // Do not edit these lines
            Console.WriteLine("Welcome to 'True or False?'\nPress Enter to begin:");
            string entry = Console.ReadLine();
            Tools.SetUpInputStream(entry);

            // Type your code below
            string[] questions = new string[] { "This is true", "This is false", "I don't lie", "I'm lying right now" };
            bool[] answers = new bool[] { true, false, false, true };
            bool[] responses = new bool[4];

            if (questions.Length != answers.Length)
            {
                Console.WriteLine("The number of questions and answers doesn't match");
            }

            int askingIndex = 0;

            foreach (string question in questions)
            {
                string input;
                bool isBool;
                bool inputBool;

                Console.WriteLine(question);
                Console.WriteLine("true or false?");
                input = Console.ReadLine();

                isBool = Boolean.TryParse(input, out inputBool);

                while (!isBool)
                {
                    Console.WriteLine("Please respond with 'true' or 'false");
                    input = Console.ReadLine();
                    isBool = Boolean.TryParse(input, out inputBool);
                }

                responses[askingIndex] = inputBool;
                askingIndex++;
            }

            int scoringIndex = 0;
            int score = 0;

            foreach (bool answer in answers){
                bool response = responses[scoringIndex];
                Console.WriteLine($"Input: {response} | Answer: {answer}");

                if (response == answer)
                {
                    score++;
                }
                scoringIndex++;
            }
            Console.WriteLine($"You got {score} out of {questions.Length} right");
        }
    }
}
