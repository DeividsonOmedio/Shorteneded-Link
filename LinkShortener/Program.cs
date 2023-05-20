using LinkShortener.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>{
    options.AddDefaultPolicy(
        policy => {
            policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
        }
    );
});


builder.Services.AddDbContext<DevEncurtaUrlDbContext>(o=> o.UseInMemoryDatabase("DevEncurtaDb"));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>{
    c.SwaggerDoc("v1", new OpenApiInfo{
    Title = "DevEncurtadorUrl.API",
    Version ="v1",
    Contact = new OpenApiContact {
        Name= "Deividson Omédio",
        Email = "deividsonomedio@gmail.com",
        Url = new Uri("https://deividsonomedio.com.br")
    }
    });
    var xmlFile = "DevEncurtaUrl.API.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    c.IncludeXmlComments(xmlPath);
});




var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{

    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

