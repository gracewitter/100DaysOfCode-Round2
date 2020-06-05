using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeCademy
{
    class ooya
    {
        static void Main(string[] args)
        {
            ooyaProfile sam = new ooyaProfile("Sam Drakkila", 30, "New York", "USA", "he/him");
            sam.SetHobbies(new string[]{ "listening to audiobooks and podcasts", "playing rec sports like bowling and kickball", "writing a speculative fiction novel", "reading advice columns"});
            Console.WriteLine(sam.ViewProfile());

            Console.ReadLine();
        } 
    }
}
