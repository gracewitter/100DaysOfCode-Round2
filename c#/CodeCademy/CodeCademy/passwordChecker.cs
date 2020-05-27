using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeCademy
{
    class passwordChecker
    {
        static void Main(string[] args)
        {
            int minLength = 8;
            string uppercase = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
            string lowercase = "abcdefghijklmnopqrstuvwxyz";
            string digits = "0123456789";
            string specialChars = "$%&*^#!?-";

            Console.WriteLine("Enter a password");
            string password = Console.ReadLine();

            int score = 0;

            if (password.Length >= minLength)
            {
                score++;
            }
            Console.WriteLine(score);

            if (Tools.Contains(password, uppercase))
            {
                score++;
            }
            Console.WriteLine(score);

            if (Tools.Contains(password, lowercase))
            {
                score++;
            }
            Console.WriteLine(score);

            if (Tools.Contains(password, digits))
            {
                score++;
            }
            Console.WriteLine(score);

            if (Tools.Contains(password, specialChars))
            {
                score++;
            }
            Console.WriteLine(score);


            Console.ReadLine();
        } 
    }
}
