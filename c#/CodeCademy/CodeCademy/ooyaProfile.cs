using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeCademy
{
    class ooyaProfile
    {
        private string name;
        private int age;
        private string city;
        private string country;
        private string pronouns;
        private string[] hobbies;

        public ooyaProfile(string name, int age, string city, string country, string pronouns = "they/them")
        {
            this.name = name;
            this.age = age;
            this.city = city;
            this.country = country;
            this.pronouns = pronouns;
            this.hobbies = new string[] { };
        }

        public string ViewProfile()
        {
            string bio = $"name: {name}\n age: {age}\n city: {city} \n country: {country} \n pronouns: {pronouns} \n hobbies: \n";
            foreach (string hobbey in hobbies)
            {
                bio += $"*  {hobbey}\n";
            }
            return bio;
        }

        public void SetHobbies(string[] hobbies)
        {
            this.hobbies = hobbies;
        }
    }
}
