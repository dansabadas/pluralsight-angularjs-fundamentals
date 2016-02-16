using System.Collections.Generic;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AppData.Controllers
{
  public class EventController : ApiController
  {
    //// GET event
    //public IEnumerable<string> Get()
    //{
    //  return new string[] { "value1", "value2" };
    //}

    // GET values/5
    public JToken Get(string id = null)
    {
      var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
      return JObject.Parse(System.IO.File.ReadAllText(path + "../app/data/event/" + id + ".json"));
    }

    // POST api/values
    public void Post(string id, JObject eventData)
    {
      var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
      System.IO.File.WriteAllText(path + "../app/data/event/" + id + ".json", eventData.ToString(Formatting.None));
    }
  }
}
