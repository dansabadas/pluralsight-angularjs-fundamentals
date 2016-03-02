using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.IO;
using System.Linq;
using System.Threading;
using System.Web.Hosting;
using System.Web.Http;

namespace AppData.Controllers
{
  public class EventController : ApiController
  {
    private const string __relativePath = @"../app/data/event/";

    public void Post(string id, JObject eventData)
    {
      var path = HostingEnvironment.MapPath("/") + __relativePath;

      var directoryInfo = new DirectoryInfo(path);
      var maxJsonId = string.IsNullOrEmpty(id) || int.Parse(id) <= 0
        ? (directoryInfo.GetFiles("*.json").Select(fileInfo => int.Parse(fileInfo.Name.Replace(".json", string.Empty))).Max() + 1).ToString()
        : id;
      File.WriteAllText(path + maxJsonId + ".json", eventData.ToString(Formatting.None));
    }

    public JToken Get(string id = null)
    {
      if(id == null)
      {
        return GetAllJsonEventsAsArray();
      }

      Thread.Sleep(2000);
      return GetSingleJsonFile(id);
    }

    private static JToken GetSingleJsonFile(string id = null)
    {
      var path = HostingEnvironment.MapPath("/");
      return JObject.Parse(File.ReadAllText(path + __relativePath + id + ".json"));
    }

    private JArray GetAllJsonEventsAsArray()
    {
      var path = HostingEnvironment.MapPath("/");
      var contents = string.Empty;
      foreach(var file in Directory.GetFiles(path + __relativePath))
      {
        contents += File.ReadAllText(file) + ",";
      }
      return JArray.Parse("[" + contents.Substring(0, contents.Length - 1) + "]");
    }
  }
}
