using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LinkShortener.Entities
{
    public class ShortenedCustomLink
    {
        public ShortenedCustomLink(string title,  string destinationLink)
        {
            var code = title.Split(" ")[0];
            Title = title;
            ShotenedLink = $"localhost:3000/{code}";
            DestinationLink = destinationLink;
            CreateAt = DateTime.Now.ToShortDateString();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string ShotenedLink { get; set; }
        public string DestinationLink { get; set; }
        public string Code { get; set; }
        public string CreateAt { get; set; }

        public void Update(string title, string destinationLink)
        {
            Title = title;
            DestinationLink = destinationLink;
        }
    }
}