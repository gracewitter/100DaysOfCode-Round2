using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeCademy
{
    class moneyMaker
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to Money Maker!");

            Console.WriteLine("How much money do you want to convert?");
            string moneyInput = Console.ReadLine();
            double startingMoney = Convert.ToDouble(moneyInput);

            Console.WriteLine($"{startingMoney} is equal to...");

            int goldValue = 10;
            int silverValue = 5;

            double goldCoins = Math.Floor(startingMoney / goldValue);
            double remainder = startingMoney % goldValue;

            double silverCoins = Math.Floor(remainder / silverValue);
            remainder = remainder % silverValue;

            Console.WriteLine("Gold Coins: " + goldCoins);
            Console.WriteLine("Silver Coins: " + silverCoins);
            Console.WriteLine("Bronze Coins: " + remainder);

            Console.ReadLine();
        }
    }
}
