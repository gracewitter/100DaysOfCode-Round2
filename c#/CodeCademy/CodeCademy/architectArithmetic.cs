using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeCademy
{
    class architectArithmetic
    {
        static void Main(string[] args)
        {
            double floorPlan = TriArea(750, 500) + (0.5 * CircleArea(375)) + RectangleArea(2500, 1500);
            double cost = Math.Round((floorPlan * 180), 2);

            Console.WriteLine($"The total cost for the floor plan is {cost}");

            Console.ReadLine();
        }
        static double RectangleArea(double width, double length)
        {
            return width * length;
        }
        static double CircleArea(double radius)
        {
            return Math.PI * Math.Pow(radius, 2);
        }
        static double TriArea(double bottom, double height)
        {
            return 0.5 * bottom * height;
        }
    }
}
