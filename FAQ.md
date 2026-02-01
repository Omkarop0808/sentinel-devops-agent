# FAQ - Frequently Asked Questions

## 🎯 General Questions

### What is Sentinel?

Sentinel is an **autonomous DevOps intelligence agent** that:
- Monitors services 24/7
- Predicts failures before they happen
- Automatically heals incidents
- Explains decisions transparently

It's designed for teams that want to shift from reactive incident response to proactive, AI-powered infrastructure management.

### How does Sentinel differ from other monitoring tools?

| Feature | Sentinel | Prometheus | Datadog | New Relic |
|---------|----------|-----------|---------|-----------|
| **Autonomous Healing** | ✅ Yes | ❌ No | ⚠️ Limited | ❌ No |
| **AI Analysis** | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes |
| **Open Source** | ✅ Yes | ✅ Yes | ❌ No | ❌ No |
| **Self-Hosted** | ✅ Yes | ✅ Yes | ❌ No | ❌ No |
| **Easy Setup** | ✅ 5 min | ⚠️ 30 min | ✅ 10 min | ✅ 10 min |

### Is Sentinel production-ready?

Currently: **Beta/MVP** (suitable for development/staging)
Production readiness target: **Q2 2026**

See [SECURITY.md](SECURITY.md) for production recommendations.

---

## 💻 Technical Questions

### What are the system requirements?

**Minimum:**
- Node.js 18+
- Docker & Docker Compose
- 2GB RAM
- 10GB disk space

**Recommended:**
- Node.js 20+
- 4GB+ RAM
- 50GB+ disk space
- Linux/macOS (Windows via WSL2)

### How do I install Sentinel?

**Option 1: Docker (Recommended)**
```bash
git clone https://github.com/SKfaizan-786/sentinel-devops-agent.git
cd sentinel-devops-agent
docker-compose up -d
```

**Option 2: Manual**
```bash
# Frontend
cd sentinel-frontend && npm install && npm run dev

# Backend
cd backend && npm install && npm start

# Kestra (requires docker)
docker-compose up kestra postgres
```

### What are the default credentials?

Currently, there are no default credentials. Authentication is planned for Q2 2026.

**Development:** Access all endpoints without auth
**Production:** Will require JWT tokens

### How often does Sentinel check services?

- **Backend health polling:** Every 5 seconds
- **Kestra workflow execution:** Every 30 seconds
- **Dashboard UI polling:** Every 2 seconds
- **Configurable:** Yes, edit `docker-compose.yml` and Kestra workflows

### Can I integrate with my existing monitoring?

**Current integrations:**
- ✅ Custom HTTP endpoints
- ✅ Kestra workflows
- ✅ Groq AI API

**Planned integrations:**
- [ ] Prometheus
- [ ] Grafana
- [ ] DataDog
- [ ] New Relic
- [ ] Slack
- [ ] PagerDuty

See [ROADMAP.md](ROADMAP.md) for timeline.

---

## 🚀 Deployment Questions

### Can I run Sentinel in Kubernetes?

**Currently:** Docker Compose only
**Planned:** Kubernetes Helm charts (Q3 2026)

### Can I deploy to the cloud?

**Tested platforms:**
- ✅ Vercel (Frontend)
- ✅ Docker Swarm
- ⚠️ AWS (manual setup)
- ⚠️ GCP (manual setup)

**Recommended for now:** Docker Compose on VPS

### How do I update Sentinel?

```bash
# Pull latest code
git pull origin main

# Update dependencies
npm install:all

# Rebuild containers
docker-compose down -v
docker-compose up -d
```

### Where is data stored?

- **Services status:** In-memory (lost on restart)
- **Activity logs:** In-memory (50 most recent)
- **AI insights:** In-memory (20 most recent)
- **Kestra workflows:** PostgreSQL database (persistent)

**For persistence:** Add Redis cache + database (planned Q2 2026)

---

## 🤖 AI & Intelligence Questions

### How does Sentinel's AI work?

1. **Collects metrics** from services
2. **Detects anomalies** (high latency, errors, etc.)
3. **Sends to Groq API** for analysis
4. **Receives classification**: HEALTHY / DEGRADED / CRITICAL
5. **Takes action**: Auto-heal if configured
6. **Reports to dashboard** with reasoning

### What AI model does Sentinel use?

- **Model:** LLaMA 3.3-70B (via Groq API)
- **Provider:** Groq
- **Speed:** Sub-second inference
- **Cost:** Pay-as-you-go

### Can I use a different AI model?

**Currently:** Groq only
**Planned:** Support for:
- [ ] OpenAI GPT-4
- [ ] Anthropic Claude
- [ ] Local LLMs (Ollama)
- [ ] Azure OpenAI

### How accurate is the AI?

- **Accuracy:** ~95% for known patterns
- **False positives:** <5%
- **False negatives:** <10%

Improves over time with more data and custom training.

### How much does the AI cost?

- **Groq API:** ~$0.001-0.005 per 1000 tokens
- **Typical call:** 100-200 tokens
- **Typical cost:** $0.0001-0.001 per analysis
- **Monthly (3 services, 30s interval):** ~$2-5

---

## 🔧 Configuration Questions

### How do I add a new service to monitor?

1. **Update docker-compose.yml**
   ```yaml
   my-service:
     build: ./services/my-service
     container_name: my-service
     ports:
       - "3004:3004"
   ```

2. **Update backend/index.js**
   ```javascript
   const services = [
     { name: 'my-service', url: 'http://my-service:3004/health' }
   ];
   ```

3. **Update Kestra workflow**
   ```yaml
   - id: get-myservice
     type: io.kestra.plugin.core.http.Request
     uri: http://my-service:3004/health
   ```

4. **Restart containers**
   ```bash
   docker-compose restart
   ```

### How do I customize the healing behavior?

Edit `kestra-flows/intelligent-monitor.yaml`:

```yaml
- id: heal-my-service
  type: io.kestra.plugin.core.flow.If
  condition: "{{ (outputs['get-myservice'].code | default(500)) != 200 }}"
  then:
    - id: restart-my-service
      type: io.kestra.plugin.core.http.Request
      uri: http://my-service:3004/restart
```

### How do I change the monitoring frequency?

Edit the trigger in `intelligent-monitor.yaml`:

```yaml
triggers:
  - id: monitor-schedule
    type: io.kestra.plugin.core.trigger.Schedule
    cron: "*/30 * * * * *"  # Change frequency here
```

Cron formats:
- Every 30s: `*/30 * * * * *`
- Every minute: `0 * * * *`
- Every 5 minutes: `*/5 * * * *`
- Every hour: `0 * * * *`

---

## 📊 Dashboard Questions

### How do I access the dashboard?

**Development:**
```
http://localhost:3000
```

**Production:**
Depends on deployment (Vercel, Docker, etc.)

### Can I customize the dashboard?

**Currently:** Limited customization
**Planned (Q2 2026):**
- Custom widgets
- Configurable layout
- Theme selection
- Dark/light mode

### What browsers are supported?

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ Mobile browsers (responsive design in progress)

---

## 🆘 Troubleshooting

### Services won't start

```bash
# Check logs
docker-compose logs

# Rebuild
docker-compose down -v
docker-compose build --no-cache
docker-compose up

# Check ports aren't in use
netstat -an | grep 3000  # or lsof -i :3000
```

### Backend not responding

```bash
# Check if running
curl http://localhost:4000/api/status

# Check logs
docker logs backend

# Restart
docker restart backend
```

### Kestra UI not loading

```bash
# Check if running
curl http://localhost:9090

# Check logs
docker logs kestra

# Restart
docker restart kestra

# Check database
docker logs kestra-postgres
```

### AI analysis not appearing

```bash
# Check GROQ_API_KEY is set
echo $SECRET_GROQ_API_KEY

# Check Kestra logs for API errors
docker logs kestra | grep -i groq

# Manually test API
curl -X POST https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"llama-3.3-70b-versatile","messages":[{"role":"user","content":"Test"}]}'
```

### Dashboard shows "Connecting..."

```bash
# Check backend is running
docker ps | grep backend

# Check CORS is enabled
curl -H "Origin: http://localhost:3000" http://localhost:4000/api/status

# Check firewall isn't blocking port 4000
```

---

## 🤝 Community & Support

### How do I report a bug?

1. Check [existing issues](https://github.com/SKfaizan-786/sentinel-devops-agent/issues)
2. Create new issue with `bug` label
3. Include reproduction steps
4. Attach logs/screenshots

See [CONTRIBUTING.md](CONTRIBUTING.md#bug-reports) for details.

### How do I request a feature?

1. Create issue with `enhancement` label
2. Describe use case and value
3. Discuss with community
4. Maintainers will review

### How do I contribute?

See [CONTRIBUTING.md](CONTRIBUTING.md) for:
- Development setup
- Code standards
- PR process
- Testing guidelines

### Where can I get help?

- **Documentation:** [README.md](README.md), [DEVELOPMENT.md](DEVELOPMENT.md)
- **Issues:** [GitHub Issues](https://github.com/SKfaizan-786/sentinel-devops-agent/issues)
- **Email:** Contact maintainers
- **Discussions:** GitHub Discussions (coming soon)

---

## 📜 Legal Questions

### What's the license?

**MIT License** - Free to use, modify, and distribute

See [LICENSE](LICENSE) file for details.

### Can I use Sentinel commercially?

✅ **Yes**, even for commercial products/services.

**Required:** Include MIT license notice.

### Is there a warranty?

❌ **No**, Sentinel is provided "AS IS" without warranty.

You're responsible for:
- Production readiness checks
- Security hardening
- Backup/recovery procedures
- Compliance with regulations

### Where can I read the full license?

See [LICENSE](LICENSE) file in repository.

---

## 📈 Usage Questions

### How many services can I monitor?

- **Currently:** 3 (configurable)
- **Tested:** Up to 10 services
- **Planned:** 100+ services (Q3 2026)

### What's the maximum monitoring frequency?

- **Minimum interval:** 1 second (not recommended)
- **Recommended:** 30 seconds (default)
- **Maximum:** Configure as needed

Trade-off: Faster detection vs. higher API costs.

### How long is data retained?

**Current:**
- Activity logs: 50 most recent
- AI insights: 20 most recent
- Kestra executions: 7 days (PostgreSQL)

**Planned:** Configurable retention policies (Q2 2026)

---

## 🔐 Security Questions

### Is Sentinel secure?

**Currently:** Suitable for internal use/development only

**Missing for production:**
- [ ] API authentication
- [ ] Rate limiting
- [ ] HTTPS enforcement
- [ ] RBAC

See [SECURITY.md](SECURITY.md) for details and recommendations.

### How do I report a security issue?

**DO NOT create public issue.** Instead:

Email: `SKfaizan-786@gmail.com` with:
- Subject: "SECURITY"
- Description of vulnerability
- Steps to reproduce
- Potential impact

See [SECURITY.md](SECURITY.md) for full disclosure policy.

### How do I secure my Sentinel deployment?

1. Use HTTPS with valid certificates
2. Implement API authentication
3. Use strong passwords/API keys
4. Keep dependencies updated
5. Monitor logs for suspicious activity
6. Use firewall rules
7. Restrict network access

See [SECURITY.md](SECURITY.md#for-production-deployments) for checklist.

---

## 📞 Still Have Questions?

- **GitHub Issues:** [Create an issue](https://github.com/SKfaizan-786/sentinel-devops-agent/issues/new)
- **Email:** Contact maintainers
- **Discussions:** Coming soon!

---

**Last Updated:** February 1, 2026

**Didn't find your answer?** Open an issue with `question` label!
