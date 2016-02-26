using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.IO;
using System.Linq;
using System.Web.Hosting;
using System.Web.Http;

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
      var path = HostingEnvironment.MapPath("/");
      return JObject.Parse(File.ReadAllText(path + "../app/data/event/" + id + ".json"));
    }

    public void Post(string id, JObject eventData)
    {
      var path = HostingEnvironment.MapPath("/") + "../app/data/event/";

      var directoryInfo = new DirectoryInfo(path);
      var maxJsonId = string.IsNullOrEmpty(id) || int.Parse(id) <= 0
        ? (directoryInfo.GetFiles("*.json").Select(fileInfo => int.Parse(fileInfo.Name.Replace(".json", string.Empty))).Max() + 1).ToString()
        : id;
      File.WriteAllText(path + maxJsonId + ".json", eventData.ToString(Formatting.None));
    }
  }
}
