using CityInfo.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace CityInfo.Controllers
{
    [Route("/api/cities")]
    public class CitiiesController : Controller
    {
        public CitiiesController()
        {
            cities = new List<CityDto> {
                new CityDto()
                {
                     Id = 1,
                     Name = "New York City",
                     Description = "The one with that big park.",

                },
                new CityDto()
                {
                    Id = 2,
                    Name = "Antwerp",
                    Description = "The one with the cathedral that was never really finished.",
                },
                new CityDto()
                {
                    Id= 3,
                    Name = "Paris",
                    Description = "The one with that big tower.",
                }
            };
        }
        public List<CityDto> cities;

        [HttpGet]
        [Route("")]
        public JsonResult GetCities()
        {
            return new JsonResult(cities);
        }

        [HttpGet]
        [Route("{id}")]
        public JsonResult GetCityByID(int id)
        {
            // List<CityDto> test = cities.Where(city => city.Id == id).ToList();
            CityDto city = cities.Where(city => city.Id == id).FirstOrDefault();

            //foreach (var item in cities)
            //{
            //    if (item.Id == id)
            //    {
            //        city = item;
            //    }
            //}
            return new JsonResult(city);
        }

        [HttpPost]
        [Route("")]
        public JsonResult CreateCity([FromBody] CityDto city)
        {
            cities.Add(city);
            return new JsonResult(cities);
        }

        [HttpDelete]
        [Route("{id}")]
        public JsonResult DeleteCityById(int id)
        {
            CityDto city = cities.Where(city => city.Id == id).FirstOrDefault();

            cities.Remove(city);
            return new JsonResult(cities);
        }
    }
}
