using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LinkShortener.Models
{
    public class AddOrUpdateShortenedLinkModels
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string DestinationLink { get; set; }
    }
}